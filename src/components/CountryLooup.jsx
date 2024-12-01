"use client";

import { useState } from "react";

export default function CountryLooup() {
  const [country ,setCountry]= useState('Sri Lanka')
  return (
    <div>{country}</div>
  )
}
