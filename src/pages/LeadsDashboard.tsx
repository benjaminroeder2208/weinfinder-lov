import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
import { Users, ArrowLeft, Lock, Mail, Wine, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Lead {
  id: string;
  email: string;
  wine_id: string | null;
  wine_name: string | null;
  quiz_answers: Record<string, string> | null;
  created_at: string;
}

const QUESTION_LABELS: Record<string, string> = {
  "0": "Anlass",
  "1": "Weinstil",
  "2": "Essen",
  "3": "Preisrahmen",
};

export default function LeadsDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("dashboard_pw")) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchLeads();
  }, [authenticated]);

  const storedPassword = () => sessionStorage.getItem("dashboard_pw") || password;

  async function fetchLeads() {
    setLoading(true);
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/get-email-stats?endpoint=leads`,
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
      if (json.leads) setLeads(json.leads);
    } catch (err) {
      console.error("Failed to fetch leads:", err);
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

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }) +
      " " + d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  };

  const formatAnswers = (answers: Record<string, string> | null) => {
    if (!answers) return "–";
    return Object.entries(answers)
      .map(([key, value]) => {
        const label = QUESTION_LABELS[key] || `Frage ${parseInt(key) + 1}`;
        return `${label}: ${value}`;
      })
      .join(" · ");
  };

  const filteredLeads = search
    ? leads.filter(
        (l) =>
          l.email.toLowerCase().includes(search.toLowerCase()) ||
          (l.wine_name && l.wine_name.toLowerCase().includes(search.toLowerCase()))
      )
    : leads;

  const exportCSV = () => {
    const header = "E-Mail,Wein,Quiz-Antworten,Datum\n";
    const rows = leads.map((l) =>
      `"${l.email}","${l.wine_name || ""}","${formatAnswers(l.quiz_answers).replace(/"/g, '""')}","${formatDate(l.created_at)}"`
    ).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authenticated) {
    return (
      <>
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <Lock className="h-10 w-10 text-primary mx-auto mb-2" />
            <CardTitle className="font-[family-name:var(--font-display)]">Leads Dashboard</CardTitle>
            <p className="text-sm text-muted-foreground">Bitte Passwort eingeben</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              {authError && (
                <p className="text-sm text-destructive">Falsches Passwort</p>
              )}
              <Button type="submit" className="w-full">Anmelden</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      </>
    );
  }

  return (
    <>
    <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground">
                Leads Übersicht
              </h1>
              <p className="text-sm text-muted-foreground">{leads.length} Leads gesammelt</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate("/email-dashboard")}>
              <Mail className="h-4 w-4 mr-1" /> E-Mail Dashboard
            </Button>
            <Button variant="outline" size="sm" onClick={exportCSV} disabled={leads.length === 0}>
              <Download className="h-4 w-4 mr-1" /> CSV Export
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{leads.length}</p>
                <p className="text-xs text-muted-foreground">Gesamt Leads</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Wine className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {new Set(leads.map((l) => l.wine_name).filter(Boolean)).size}
                </p>
                <p className="text-xs text-muted-foreground">Verschiedene Weine</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {new Set(leads.map((l) => l.email)).size}
                </p>
                <p className="text-xs text-muted-foreground">Einzigartige E-Mails</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Input
          placeholder="Suche nach E-Mail oder Wein..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        {/* Leads Table */}
        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center text-muted-foreground">Laden...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">Keine Leads gefunden</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Empfohlener Wein</TableHead>
                    <TableHead>Quiz-Antworten</TableHead>
                    <TableHead>Datum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-mono text-xs">{lead.email}</TableCell>
                      <TableCell>
                        {lead.wine_name ? (
                          <Badge variant="secondary" className="text-xs">{lead.wine_name}</Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">–</span>
                        )}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground max-w-[300px]">
                        {formatAnswers(lead.quiz_answers)}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatDate(lead.created_at)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
