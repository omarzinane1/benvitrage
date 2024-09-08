"use client"
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react'; 

export default function FloatingButtons() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Bouton WhatsApp flottant */}
      <div className="fixed bottom-4 left-4 z-50">
        <a href="https://wa.me/0653362238" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-12 h-12 text-green-500" />
        </a>
      </div>

      {/* Bouton de retour en haut */}
      {showButton && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg"
          >
            ⬆️
          </button>
        </div>
      )}
    </div>
  );
}
