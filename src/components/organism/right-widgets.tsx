"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CloudRain, 
  Music2, 
  Monitor, 
  Wrench, 
  MapPin, 
  Music4,
  Link
} from "lucide-react";

// GANTI DENGAN DISCORD ID KAMU
const DISCORD_ID = "1306237830229393428"; 

export default function RightWidgets() {
  const [weather, setWeather] = useState<any>(null);
  const [time, setTime] = useState("");
  const [spotify, setSpotify] = useState<any>(null);

  useEffect(() => {
    // 1. Live Clock
    const updateClock = () => {
      setTime(new Date().toLocaleDateString('en-US', { 
        month: 'short', day: '2-digit', hour: 'numeric', minute: '2-digit', hour12: true 
      }));
    };
    updateClock();
    const clockTimer = setInterval(updateClock, 60000);

    // 2. Fetch Cuaca Kediri
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-7.8167&longitude=112.0167&current=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FJakarta");
        setWeather(await res.json());
      } catch (e) { console.error(e); }
    };
    fetchWeather();

    // 3. Lanyard API (Spotify Live via Discord)
    const fetchLanyard = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const { data } = await res.json();
        if (data?.listening_to_spotify) {
          setSpotify(data.spotify);
        } else {
          setSpotify(null);
        }
      } catch (e) { console.error(e); }
    };
    fetchLanyard();
    const spotifyTimer = setInterval(fetchLanyard, 5000); // Update tiap 5 detik

    return () => {
      clearInterval(clockTimer);
      clearInterval(spotifyTimer);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Status Card */}
      <Card className="p-5 bg-[#121212] border-zinc-800/60 rounded-2xl flex flex-col gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          Status
        </div>
        <ul className="space-y-3 text-[13px] text-zinc-400 font-medium">
          <li className="flex items-center gap-3"><Monitor className="w-4 h-4 text-zinc-500" /> Available for Work</li>
          <li className="flex items-center gap-3"><Wrench className="w-4 h-4 text-zinc-500" /> Open to Freelance Projects</li>
          <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-zinc-500" /> Kediri, ID & Remote</li>
        </ul>
        <Button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-xl h-9">
          🚀 Open to Opportunities
        </Button>
      </Card>

      {/* Weather Card */}
      <Card className="p-5 bg-[#121212] border-zinc-800/60 rounded-2xl flex flex-col gap-4">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
          <CloudRain className="w-4 h-4" /> Weather
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <span className="text-4xl">⛅</span>
            <div className="text-4xl font-bold text-white tracking-tighter">
              {weather ? Math.round(weather.current.temperature_2m) : "--"}°
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-white">Kediri, ID</div>
            <div className="text-[10px] text-zinc-500">{time}</div>
          </div>
        </div>
      </Card>

      {/* Spotify Card - LIVE DATA! */}
      <Card className="p-5 bg-[#121212] border-zinc-800/60 rounded-2xl flex flex-col gap-4">
        <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
          <Music2 className="w-4 h-4 fill-emerald-500" /> Spotify
        </div>
        
        <div className="flex items-center gap-4">
          {spotify ? (
            <img 
              src={spotify.album_art_url} 
              alt="Album Art" 
              className="w-16 h-16 rounded-xl object-cover shadow-lg animate-in fade-in zoom-in duration-500"
            />
          ) : (
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-zinc-600">
               <Music4 className="w-8 h-8 opacity-50" />
            </div>
          )}
          
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold text-white truncate uppercase tracking-tight">
              {spotify ? spotify.song : "Spotify Idle"}
            </span>
            <span className="text-xs text-zinc-500 mt-0.5 truncate">
              {spotify ? `by ${spotify.artist}` : "No songs playing"}
            </span>
          </div>
        </div>

        {spotify && (
          <div className="mt-1 flex items-center gap-2 text-[10px] text-emerald-500 font-bold bg-emerald-500/5 w-fit px-2 py-0.5 rounded-full border border-emerald-500/10">
            <Link className="w-3 h-3" /> Listening on Spotify
          </div>
        )}
      </Card>
    </div>
  );
}