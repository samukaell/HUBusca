"use client";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface SimpleAlertProps {
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  mensagem: string;
  type: "error" | "warning" | "success";
}

export default function SimpleAlert({
  open,
  onClose,
  mensagem,
  type,
}: SimpleAlertProps) {
  const getAlertProps = () => {
    switch (type) {
      case "error":
        return {
          icon: <ErrorOutlineIcon fontSize="inherit" />,
          severity: "error" as const,
        };
      case "warning":
        return {
          icon: <WarningAmberIcon fontSize="inherit" />,
          severity: "warning" as const,
        };
      case "success":
        return {
          icon: <CheckIcon fontSize="inherit" />,
          severity: "success" as const,
        };
      default:
        return null;
    }
  };

  const alertProps = getAlertProps();
  if (!alertProps) return null;

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={onClose}
      sx={{ width: "30%", marginLeft: "20px" }}
    >
      <Alert
        sx={{ width: "100%" }}
        icon={alertProps.icon}
        severity={alertProps.severity}
        onClose={onClose}
      >
        {mensagem}
      </Alert>
    </Snackbar>
  );
}
