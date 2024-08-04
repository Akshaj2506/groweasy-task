"use client";
import { useEffect } from "react";

const AddBootstrap = () => {
  useEffect(() => {
    import("bootstrap");
  }, [])
  return <></>
}

export default AddBootstrap