import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import api from "@/shared/services/apiService";
import { HumorRegistro } from "@/modules/users/humorService";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface Perfil {
  nome: string;
  email: string;
  avatarUrl?: string;
}
interface Props {
  id_ws: string;
}
// Agora guardamos id_ws + humor + criado_em
type MinimalHumor = Pick<HumorRegistro, "id_ws" | "humor" | "criado_em">;

const GraficoHumor: React.FC<Props> = ({ id_ws }) => {
  const [dados, setDados] = useState<MinimalHumor[]>([]);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchTudo = async () => {
      try {
        // 1) busca tudo do humor
        const humorRes = await api.get<HumorRegistro[]>("/humor");
        // 2) filtra e mantém id_ws, humor e criado_em
        const minimal = humorRes.data
          .filter((r) => r.id_ws === id_ws)
          .map((r) => ({
            id_ws: r.id_ws,
            humor: r.humor,
            criado_em: r.criado_em, // ajuste se seu campo for outro
          }));
        // 3) ordena cronologicamente pela data
        minimal.sort(
          (a, b) =>
            new Date(a.criado_em).getTime() -
            new Date(b.criado_em).getTime()
        );
        setDados(minimal);

        // Se precisar também do perfil:
        const perfilRes = await api.get<Perfil>(`/perfil?id_ws=${id_ws}`);
        setPerfil(perfilRes.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTudo();
  }, [id_ws]);

  if (loading) {
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (dados.length === 0) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="body1">Nenhum registro de humor.</Typography>
      </Box>
    );
  }

  // X = data formatada, Y = humor convertido em número
  const labels = dados.map((r) => {
    const d = new Date(r.criado_em);
    return d.toLocaleDateString("pt-BR"); // ex: "01/07/2025"
  });
  const values = dados.map((r) => {
    switch (r.humor.toLowerCase()) {
      case "muito ruim":
        return 1;
      case "ruim":
        return 2;
      case "neutro":
        return 3;
      case "bem":
        return 4;
      case "muito bem":
        return 5;
      default:
        return 3;
    }
  });

  const chartHeight = isMobile ? 300 : 500;

  const lineData = {
    labels,
    datasets: [
      {
        label: "Humor",
        data: values,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.3,
        pointRadius: isMobile ? 4 : 8,
        borderWidth: isMobile ? 2 : 3,
        fill: true,
      },
    ],
  };
  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { ticks: { autoSkip: true, maxTicksLimit: isMobile ? 5 : 10 } },
      y: {
        min: 0,
        max: 5.5,
        ticks: {
          stepSize: 1,
          callback: (v) => {
            const map: Record<number, string> = {
              1: "Muito Ruim",
              2: "Ruim",
              3: "Neutro",
              4: "Bem",
              5: "Muito Bem",
            };
            return map[Number(v)] || "";
          },
        },
      },
    },
    plugins: {
      tooltip: { enabled: true },
      legend: { display: true },
    },
  };

  const barData = {
    labels,
    datasets: [
      {
        label: "Humor",
        data: values,
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };
  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: lineOptions.scales,
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  return (
    <Paper elevation={5} sx={{ mt: 4, p: 3 }}>
      {perfil && (
        <Box display="flex" alignItems="center" mb={2}>
          {perfil.avatarUrl && (
            <Avatar
              src={perfil.avatarUrl}
              alt={perfil.nome}
              sx={{ width: 48, height: 48, mr: 2 }}
            />
          )}
          <Typography variant="h6">{perfil.nome}</Typography>
        </Box>
      )}

      <Typography
        variant="h5"
        gutterBottom
        textAlign="center"
        fontFamily={"'Poppins, sans-serif'"}
      >
        Seu Histórico ao longo do Tempo
      </Typography>

      <Box sx={{ height: chartHeight }}>
        {isMobile ? (
          <Bar data={barData} options={barOptions} />
        ) : (
          <Line data={lineData} options={lineOptions} />
        )}
      </Box>
    </Paper>
  );
};

export default GraficoHumor;
