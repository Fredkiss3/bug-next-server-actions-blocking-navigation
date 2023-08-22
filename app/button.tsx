"use client";
import * as React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending: isPending } = useFormStatus();
  return (
    <button type="submit">Perform action {isPending && `(loading...)`}</button>
  );
}
