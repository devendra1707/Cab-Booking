"use client";
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchResultCard = ({ item, latitude_key, longitude_key, setActiveField, area_key }) => {

    const pickup_latitude = 19.0785451
    const pickup_longitude = 72.878176
    const pickup_area = "Mumbai, Mumbai Suburban,India"
    const destination_latitude = 42.2781401
    const destination_longitude = -74.9159946
    const destination_area = "Delhi, Town of Delhi, Delware country,New York,United State"


    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSelect = () => {

        const params = new URLSearchParams(searchParams)

        params.set([latitude_key], pickup_latitude)
        params.set([longitude_key], pickup_longitude)
        params.set([area_key], pickup_area)


        router.replace(pathname+"?"+params.toString())

        console.log("Path Name -", pathname, "searchParams - ", searchParams);
    }
    return (
        <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
            <div className="pr-5">
                <LocationOnIcon />

            </div>

            <div>
                <p className="font-semibold">
                    {/* {item?.display_name.split(" ")[0]} */}
                    mumbai
                </p>
                <p className="font-semibold opacity-60">
                    {/* {item?.display_name} */}
                    Mumbai Gurukal Dham
                </p>
            </div>
        </div>
    )
}

export default SearchResultCard