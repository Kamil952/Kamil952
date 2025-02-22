import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, Tab } from "@/components/ui/tabs";

export default function WeddingWebsite() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 bg-cover bg-center text-gray-900"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Monterey, sans-serif',
      }}
    >
      <header className="text-center my-8 bg-white/70 p-6 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold text-pink-600">Zapraszamy na ślub Marty i Kamila!</h1>
        <p className="text-lg mt-2 text-gray-700">31 grudnia 2025, Łódź</p>
      </header>

      <Tabs>
        <Tab label="Szczegóły">
          <Card className="max-w-2xl w-full p-6 mb-6 text-center bg-white/90 shadow-lg rounded-2xl border border-pink-300">
            <CardContent>
              <h2 className="text-2xl font-semibold text-pink-600">Szczegóły</h2>
              <p className="mt-2">Ceremonia: Kościół Ojców Bernardynów, ul. bł. Anastazego Pankiewicza 15, Łódź, godz. 15:00</p>
              <p>Przyjęcie: Zielony Buk, ul. Rogowska 27, godz. 18:00</p>
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Plan dnia">
          <Card className="max-w-2xl w-full p-6 mb-6 bg-white/90 shadow-lg rounded-2xl border border-pink-300">
            <CardContent>
              <h2 className="text-2xl font-semibold text-center text-pink-600">Plan Dnia</h2>
              <p>15:00 - Ceremonia ślubna</p>
              <p>17:00 - Przyjazd na salę weselną</p>
              <p>18:00 - Powitanie gości i pierwszy taniec</p>
              <p>19:00 - Kolacja</p>
              <p>21:00 - Zabawa i atrakcje</p>
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Menu">
          <Card className="max-w-2xl w-full p-6 mb-6 bg-white/90 shadow-lg rounded-2xl border border-pink-300">
            <CardContent>
              <h2 className="text-2xl font-semibold text-center text-pink-600">Menu</h2>
              <p>Przystawki, dania główne, desery oraz opcje wegetariańskie.</p>
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Rozmieszczenie stołów">
          <Card className="max-w-2xl w-full p-6 mb-6 bg-white/90 shadow-lg rounded-2xl border border-pink-300">
            <CardContent>
              <h2 className="text-2xl font-semibold text-center text-pink-600">Rozmieszczenie Stołów</h2>
              <p>Sprawdź, gdzie będziesz siedzieć podczas przyjęcia weselnego!</p>
            </CardContent>
          </Card>
        </Tab>

        <Tab label="RSVP">
          <Card className="max-w-2xl w-full p-6 mb-6 bg-white/90 shadow-lg rounded-2xl border border-pink-300">
            <CardContent>
              <h2 className="text-2xl font-semibold text-center text-pink-600">RSVP</h2>
              {!submitted ? (
                <form className="mt-4" onSubmit={handleSubmit}>
                  <Input
                    className="mb-2 border-pink-300"
                    placeholder="Twoje imię"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Textarea
                    className="mb-2 border-pink-300"
                    placeholder="Twoja wiadomość"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">Wyślij</Button>
                </form>
              ) : (
                <p className="text-center text-green-600">Dziękujemy za potwierdzenie obecności!</p>
              )}
            </CardContent>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}