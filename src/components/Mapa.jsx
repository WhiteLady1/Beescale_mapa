import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import spendlikUrl from '../img/pin.svg';
import mapySeznam from '../img/mapy_logo.svg';
import './mapaSeznam.css';
import './mapa.css';
import './ovladani.css';

export const Mapa = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.084209699999995,
    longitude: 14.4477191,
    zoom: 15,
  });

  const seznamMapy = {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
        minzoom: 0,
        maxzoom: 19,
        tileSize: 256,
      },
    },
    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'osm',
      },
    ],
  };

  const [popupOtevren, setPopupOtevren] = useState(false);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height={400}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken="pk.eyJ1Ijoid2hpdGVsYWR5IiwiYSI6ImNraHVvMmozODFldGoycGt6ZDZlNjRwZmUifQ.vejjMGJgs0GlqR9Ccy6xeg"
      mapStyle={seznamMapy}
    >
      <div className="ovladani">
        <NavigationControl />
        <GeolocateControl />
      </div>
      <Marker
        latitude={50.084209699999995}
        longitude={14.4477191}
        offsetLeft={-25}
        offsetTop={-50}
      >
        <button className="marker-btn" onClick={() => setPopupOtevren(true)}>
          <img src={spendlikUrl} width={50} height={50} alt="Přibyslavská" />
        </button>
      </Marker>
      {popupOtevren && (
        <Popup
          latitude={50.084209699999995}
          longitude={14.4477191}
          offsetTop={-50}
          onClose={() => setPopupOtevren(false)}
        >
          Doma
        </Popup>
      )}
      <img className="mapaSeznam" src={mapySeznam} alt="Seznam mapy" />
    </ReactMapGL>
  );
};
