import { useQuery } from '@tanstack/react-query';
import type { APIResponse, EquipmentData, Equipment } from '../types';

// Use relative path to leverage Vite proxy
const API_URL = '/api/get_constants';

// Hide items
const hideItems = ['ArtisanTool', "Crowbar", 'Toolbelt', 'Pants', 'Shirt', "Bag"]

/**
 * Fetch equipment data from AOC Planner API
 */
async function fetchEquipmentData(): Promise<EquipmentData> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch equipment data');
    }

    const data: APIResponse = await response.json();
    return data.data;
}

/**
 * Custom hook to fetch and cache equipment data using TanStack Query
 */
export function useEquipment() {
    return useQuery({
        queryKey: ['equipment'],
        queryFn: fetchEquipmentData,
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60 * 24, // 24 hours (renamed from cacheTime in v5)
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
    });
}

/**
 * Get all helmets from equipment data
 */
export function useHelmets() {
    const { data, ...rest } = useEquipment();

    return {
        data: data?.Helmets || [],
        ...rest
    };
}

/**
 * Get equipment by category
 */
export function useEquipmentByCategory(category: string) {
    const { data, ...rest } = useEquipment();

    return {
        data: data?.[category] || [],
        ...rest
    };
}

/**
 * Get all equipment items flattened
 */
export function useAllEquipment() {
    const { data, ...rest } = useEquipment();

    const allItems: Equipment[] = data ? Object.values(data).flat() : [];
    return {
        data: allItems.filter(item => !hideItems.includes(item.Slot)),
        ...rest
    };
}
