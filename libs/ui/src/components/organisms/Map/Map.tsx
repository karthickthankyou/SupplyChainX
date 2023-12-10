'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import MapGl, { Map as MapProps, useMap } from 'react-map-gl'

export type ViewState = {
  latitude: number
  longitude: number
  zoom?: number
}

type MapProps = React.ComponentProps<typeof MapGl>

type IMapProps = MapProps & { height?: string }

export const Map = ({ height = 'calc(100vh - 4rem)', ...props }: IMapProps) => {
  const { theme } = useTheme()

  return (
    <MapGl
      {...props}
      mapStyle={
        theme === 'dark'
          ? 'mapbox://styles/mapbox/dark-v11'
          : 'mapbox://styles/iamkarthick/clebahxqe001701mo1i1adtw3'
      }
      mapboxAccessToken="pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"
      style={{ height }}
      pitch={22.5}
      scrollZoom={false}
      doubleClickZoom={false}
    >
      <StyleMap />
      {props.children}
    </MapGl>
  )
}

export const StyleMap = () => {
  const { current } = useMap()
  const { theme } = useTheme()
  const dark = theme === 'dark'

  current?.on('style.load', () => {
    current?.getMap().setFog({
      color: dark ? 'rgb(150, 150, 150)' : 'rgb(250,250,250)', // Lower atmosphere
      range: [1, 10],
      'high-color': dark ? 'rgb(100, 100, 100)' : 'rgb(200,200,200)', // Upper atmosphere
      'horizon-blend': 0.05, // Atmosphere thickness (default 0.2 at low zooms)
      'space-color': dark ? 'rgb(50, 50, 50)' : 'rgb(150, 150, 150)', // Background color
      'star-intensity': 0.5, // Background star brightness (default 0.35 at low zoooms )
    })
  })
  return null
}
