import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://zvnjmsxmamynjwvvksot.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2bmptc3htYW15bmp3dnZrc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NjM4MTUsImV4cCI6MTk5NzEzOTgxNX0.jhnvawCSM4UrnlZbjbe0i3b7kDf-G184M8C6eErapno",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2bmptc3htYW15bmp3dnZrc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NjM4MTUsImV4cCI6MTk5NzEzOTgxNX0.jhnvawCSM4UrnlZbjbe0i3b7kDf-G184M8C6eErapno"
    }
})

