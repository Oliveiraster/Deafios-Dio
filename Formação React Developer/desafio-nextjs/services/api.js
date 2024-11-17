import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://lywxxdpgtrrriefyzpqp.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5d3h4ZHBndHJycmllZnl6cHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3ODEwNDYsImV4cCI6MjA0NzM1NzA0Nn0.ehnrdaNaOJJyUPkg5p6jo70wjYBxK95Wj7bfaNLOMwI",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5d3h4ZHBndHJycmllZnl6cHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3ODEwNDYsImV4cCI6MjA0NzM1NzA0Nn0.ehnrdaNaOJJyUPkg5p6jo70wjYBxK95Wj7bfaNLOMwI"
    }
})