import React from 'react';
import Card from '../components/Card';

const cards = [
  { title: "The Code Citadel", icon: "💻", color: "bg-purple-700" },
  { title: "Chronicles Keep", icon: "📖", color: "bg-red-700" },
  { title: "The Ad Bastion", icon: "🚀", color: "bg-green-700" },
  { title: "Linguist’s Tower", icon: "🇹🇷", color: "bg-blue-700" },
  { title: "The Artisan’s Forge", icon: "🛠️", color: "bg-yellow-600" },
];

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center justify-center p-4">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-white">Epic Dashboard</h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} icon={card.icon} color={card.color} />
        ))}
      </main>
    </div>
  );
};

export default Home;
