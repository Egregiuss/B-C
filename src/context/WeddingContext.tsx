import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WeddingData {
  couple: {
    bride: string;
    groom: string;
  };
  weddingDate: Date;
  venues: {
    ceremony: {
      name: string;
      address: string;
      time: string;
    };
    reception: {
      name: string;
      address: string;
      time: string;
    };
  };
  rsvps: RSVP[];
  guestbook: GuestbookEntry[];
}

interface RSVP {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  attendance: 'yes' | 'no';
  guests: number;
  dietary: string;
  message: string;
  timestamp: Date;
}

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

interface WeddingContextType {
  weddingData: WeddingData;
  addRSVP: (rsvp: Omit<RSVP, 'id' | 'timestamp'>) => void;
  addGuestbookEntry: (entry: Omit<GuestbookEntry, 'id' | 'timestamp'>) => void;
  updateWeddingData: (data: Partial<WeddingData>) => void;
}

const WeddingContext = createContext<WeddingContextType | undefined>(undefined);

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
};

interface WeddingProviderProps {
  children: ReactNode;
}

export const WeddingProvider: React.FC<WeddingProviderProps> = ({ children }) => {
  const [weddingData, setWeddingData] = useState<WeddingData>({
    couple: {
      bride: 'Sarah',
      groom: 'Michael',
    },
    weddingDate: new Date('2024-06-15T16:00:00'),
    venues: {
      ceremony: {
        name: "St. Mary's Cathedral",
        address: '123 Wedding Lane, New York, NY 10001',
        time: '4:00 PM',
      },
      reception: {
        name: 'Grand Ballroom',
        address: '456 Celebration Ave, New York, NY 10002',
        time: '6:00 PM',
      },
    },
    rsvps: [],
    guestbook: [],
  });

  const addRSVP = (rsvp: Omit<RSVP, 'id' | 'timestamp'>) => {
    const newRSVP: RSVP = {
      ...rsvp,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setWeddingData(prev => ({
      ...prev,
      rsvps: [...prev.rsvps, newRSVP],
    }));
  };

  const addGuestbookEntry = (entry: Omit<GuestbookEntry, 'id' | 'timestamp'>) => {
    const newEntry: GuestbookEntry = {
      ...entry,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setWeddingData(prev => ({
      ...prev,
      guestbook: [...prev.guestbook, newEntry],
    }));
  };

  const updateWeddingData = (data: Partial<WeddingData>) => {
    setWeddingData(prev => ({ ...prev, ...data }));
  };

  return (
    <WeddingContext.Provider
      value={{
        weddingData,
        addRSVP,
        addGuestbookEntry,
        updateWeddingData,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};