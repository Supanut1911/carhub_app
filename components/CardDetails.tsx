import { CarProps } from "@/types";
import React from "react";

interface CarDetailProp {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CardDetails = ({ isOpen, closeModal, car }: CarDetailProp) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
