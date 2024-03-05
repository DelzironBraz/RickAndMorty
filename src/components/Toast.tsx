import { Alert } from "@mui/material";

const Toast = ({ error }) => {
    return (
        <Alert severity="error" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', marginTop: '3rem' }}>
            {error.message}
        </Alert>
    )
}

export default Toast;