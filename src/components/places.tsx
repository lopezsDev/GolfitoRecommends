'use client'

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChevronLeftIcon from "@/components/ui/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/ui/icons/ChevronRightIcon";

interface Place {
    place_id: string;
    name: string;
    formatted_address: string;
    image: string | null;
    rating?: number;
    types?: string[];
}

export default function Places() {
    const [locations, setLocations] = useState<Place[]>([]);
    const [seenIds, setSeenIds] = useState(new Set());
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const [nextPageToken, setNextPageToken] = useState<string | null>(null);

    const fetchPlaces = async (pagetoken?: string) => {
        const url = `/api/places${pagetoken ? '?pagetoken=' + pagetoken : ''}`;
        const response = await fetch(url);
        const data = await response.json();
        const newPlaces = data.results.filter((place: Place) => !seenIds.has(place.place_id));
        newPlaces.forEach((place: Place) => seenIds.add(place.place_id));
        setLocations(prev => [...prev, ...newPlaces]);
        setNextPageToken(data.next_page_token);
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + locations.length) % locations.length);
        setExpandedCard(null);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
        setExpandedCard(null);
    };

    const handleCardClick = (id: string) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const loadMore = () => {
        if (nextPageToken) {
            fetchPlaces(nextPageToken);
        }
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
                <Button variant="outline" size="icon" className="rounded-full p-2 text-muted-foreground hover:text-foreground" onClick={handlePrev}>
                    <ChevronLeftIcon className="h-6 w-6" />
                    <span className="sr-only">Previous</span>
                </Button>
                <div className="flex-1 overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {locations.map((location) => (
                            <div key={location.place_id} className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 py-4 transition-transform duration-300 ease-in-out ${expandedCard === location.place_id ? "scale-110 z-10" : "hover:scale-105"}`} onClick={() => handleCardClick(location.place_id)}>
                                <Card className="h-full">
                                    <CardContent className="flex flex-col gap-4">
                                        <img src={location.image || '/default-image.jpg'} alt={location.name} className="rounded-lg object-cover w-full aspect-[4/3]" />
                                        <div className="grid gap-2">
                                            <h3 className="text-lg font-semibold">{location.name}</h3>
                                            <p className="text-muted-foreground">{location.formatted_address}</p>
                                            {location.rating && <p>Rating: {location.rating}</p>}
                                            {location.types && <p>Types: {location.types.join(', ')}</p>}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <Button variant="outline" size="icon" className="rounded-full p-2 text-muted-foreground hover:text-foreground" onClick={handleNext}>
                    <ChevronRightIcon className="h-6 w-6" />
                    <span className="sr-only">Next</span>
                </Button>
                {nextPageToken && (
                    <Button onClick={loadMore} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Load More
                    </Button>
                )}
            </div>
        </div>
    );
}
