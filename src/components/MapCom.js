import React, {useState} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function MapCom(props) {
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const onMarkerClick = (props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowingInfoWindow(true)
    }
    const onMapClicked = (props) => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false)
            setActiveMarker(null)
        }
    };
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '40%',
        backgroundColor: '#000'
    }
    return (
        <div id="map">
            <Map
                google={props.google}
                onClick={onMapClicked}
                initialCenter={{
                    lat: 41.31662495489084,
                    lng: 69.28395143604303
                }}
                containerStyle={containerStyle}
                zoom={15}
            >

                <Marker onClick={onMarkerClick} name={'Current location'}>
                    <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                        <div>
                            <h1>{selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Marker>
            </Map>
        </div>
    );

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDtjyjCX0MIq4o8PW1ix3FaTx9HvY4i8II")
})(MapCom)


