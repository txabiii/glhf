'use client';

import React, { useState, useEffect, useContext, createContext } from 'react';

interface Story {
  _id: string,
  id: number,
  title: string,
  preview: string,
  place: string,
  address: string,
  city: string,
  date: string,
  md: string,
  locationImg: string,
  storyImg: string,
}

interface StoriesContextValue {
  stories: Story[];
  setStories: React.Dispatch<React.SetStateAction<Story[]>>;
  fetchStories: () => void;
}

const defaultStories: Story[] = [];

const StoriesContext = createContext<StoriesContextValue>({
  stories: defaultStories,
  setStories: () => {},
  fetchStories: () => {},
});

const useStoriesContext = () => useContext(StoriesContext);

const StoriesProvider = ({ children }: any) => {
  const [stories, setStories] = useState<Story[]>(defaultStories);

  const fetchStories = () => {
    async function fetchData() {
      const response = await fetch("https://glhf-backend.vercel.app/api/stories");
      const data = await response.json();
      
      setStories(data);
    }
    fetchData();
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <StoriesContext.Provider value={{ stories, setStories, fetchStories }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default useStoriesContext;
export { StoriesProvider };