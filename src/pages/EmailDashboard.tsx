import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail, CheckCircle, XCircle, Ban, Clock, ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EmailLog {
  id: string;
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

interface SuppressedEmail {
  email: string;
  reason: string;
  created_at: string;
}

interface Stats {
  total: number;
  sent: number;
  failed: number;
  pending: number;
  suppressed: number;
}

const TIME_RANGES = [
  { label: "24h", days: 1 },
  { label: "7 Tage", days: 7 },
  { label: "30 Tage", days: 30 },
];

export default function EmailDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({ total: 0, sent: 0, failed: 0, pending: 0, suppressed: 0 });
  const [emails, setEmails] = useState<EmailLog[]>([]);
  const [suppressed, setSuppressed] = useState<SuppressedEmail[]>([]);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(30);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [tab, setTab] = useState<"emails" | "suppressed">("emails");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    if (authenticated) fetchData();
  }, [days, authenticated]);

  const storedPassword = () => sessionStorage.getItem("dashboard_pw") || password;

  async function fetchData() {
    setLoading(true);
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/get-email-stats?days=${days}`,
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            "x-dashboard-password": storedPassword(),
          },
        }
      );

      if (res.status === 401) {
        setAuthenticated(false);
        setAuthError(true);
        sessionStorage.removeItem("dashboard_pw");
        return;
      }

      const json = await res.json();
      if (json.stats) setStats(json.stats);
      if (json.emails) setEmails(json.emails);
      if (json.suppressed) setSuppressed(json.suppressed);
    } catch (err) {
      console.error("Failed to fetch email stats:", err);
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(false);
    sessionStorage.setItem("dashboard_pw", password);
    setAuthenticated(true);
  }

  const filteredEmails = statusFilter === "all"
    ? emails
    : emails.filter((e) =>
        statusFilter === "failed"
          ? e.status === "failed" || e.status === "dlq"
          : e.status === statusFilter
      );

  const statusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Gesendet</Badge>;
      case "failed":
      case "dlq":
        return <Badge className="bg-red-600/20 text-red-400 border-red-600/30">Fehlgeschlagen</Badge>;
      case "pending":
        return <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">Ausstehend</Badge>;
      case "suppressed":
        return <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">Unterdrückt</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }) +
      " " + d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground">
              E-Mail Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">Übersicht aller gesendeten E-Mails</p>
          </div>
        </div>

        {/* Time Range */}
        <div className="flex gap-2">
          {TIME_RANGES.map((r) => (
            <Button
              key={r.days}
              variant={days === r.days ? "default" : "outline"}
              size="sm"
              onClick={() => setDays(r.days)}
            >
              {r.label}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                <p className="text-xs text-muted-foreground">Gesamt</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.sent}</p>
                <p className="text-xs text-muted-foreground">Gesendet</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.failed}</p>
                <p className="text-xs text-muted-foreground">Fehlgeschlagen</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
                <p className="text-xs text-muted-foreground">Ausstehend</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Ban className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.suppressed}</p>
                <p className="text-xs text-muted-foreground">Abgemeldet</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2">
          <Button
            variant={tab === "emails" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("emails")}
          >
            E-Mail-Verlauf
          </Button>
          <Button
            variant={tab === "suppressed" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("suppressed")}
          >
            Abmeldungen ({suppressed.length})
          </Button>
        </div>

        {tab === "emails" && (
          <>
            {/* Status Filter */}
            <div className="flex gap-2">
              {[
                { key: "all", label: "Alle" },
                { key: "sent", label: "Gesendet" },
                { key: "failed", label: "Fehlgeschlagen" },
                { key: "pending", label: "Ausstehend" },
              ].map((f) => (
                <Button
                  key={f.key}
                  variant={statusFilter === f.key ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setStatusFilter(f.key)}
                >
                  {f.label}
                </Button>
              ))}
            </div>

            {/* Email Table */}
            <Card>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-8 text-center text-muted-foreground">Laden...</div>
                ) : filteredEmails.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">Keine E-Mails gefunden</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Empfänger</TableHead>
                        <TableHead>Vorlage</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Wein</TableHead>
                        <TableHead>Datum</TableHead>
                        <TableHead>Fehler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEmails.map((email) => (
                        <TableRow key={email.id}>
                          <TableCell className="font-mono text-xs">{email.recipient_email}</TableCell>
                          <TableCell className="text-xs">{email.template_name}</TableCell>
                          <TableCell>{statusBadge(email.status)}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">
                            {(email.metadata as any)?.wineName || "–"}
                          </TableCell>
                          <TableCell className="text-xs text-muted-foreground">
                            {formatDate(email.created_at)}
                          </TableCell>
                          <TableCell className="text-xs text-red-400 max-w-[200px] truncate">
                            {email.error_message || "–"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </>
        )}

        {tab === "suppressed" && (
          <Card>
            <CardContent className="p-0">
              {suppressed.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">Keine Abmeldungen</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>E-Mail</TableHead>
                      <TableHead>Grund</TableHead>
                      <TableHead>Datum</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suppressed.map((s, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-mono text-xs">{s.email}</TableCell>
                        <TableCell className="text-xs">{s.reason}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {formatDate(s.created_at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
