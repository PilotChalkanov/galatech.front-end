import React from 'react';
import {Row, Container} from 'react-bootstrap'
import {useState, useEffect, useRef} from "react";

function GoogleMap() {
    console.log(process.env)
    const googleMapRef = useRef();
    const [mapLoaded, setMapLoaded] = useState(false);
    let googleMap;
    useEffect(() => {
        if (!mapLoaded) {
            const googleMapScript = document.createElement("script");
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=createGoogleMap`;
            googleMapScript.async = true;
            window.document.body.appendChild(googleMapScript);
            googleMapScript.addEventListener("load", () => {
                setMapLoaded(true);
                getLatLng();
            });
        } else {
            getLatLng();
        }

    }, );
    const createGoogleMap = (coordinates) => {
        googleMap = new window.google.maps.Map(googleMapRef.current, {
            zoom: 16,
            center: {
                lat: coordinates.lat(),
                lng: coordinates.lng(),
            },
            disableDefaultUI: true,
        });
    };
    const getLatLng = () => {
        const lat = 43.237638;
        const lng = 27.845068;
        const placeName = 'GalaTech Turbo';
        new window.google.maps.Geocoder().geocode(
            {address: `${placeName}`},
            function (results, status) {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    createGoogleMap(results[0].geometry.location);
                    new window.google.maps.Marker({
                        position: {lat, lng},
                        map: googleMap,
                        animation: window.google.maps.Animation.DROP,
                        title: `${placeName}`,
                    });
                } else {
                    alert(
                        "Geocode was not successful for the following reason: " + status
                    );
                }
            }
        );
    };
    return (
        <Container clasName="main-container" id={"google-map"} ref={googleMapRef} fluid style={{ height: "50vh", width: "100%", position: "relative" }}>
        </Container>

    );
}

export default GoogleMap;