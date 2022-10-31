import Box from '@mui/material/Box';

export default function FileUploadView({ image }) {
    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
            }}
            >
            <img src={image} alt="" sx={{ minWidth: "100%" }} />
        </Box>
    )
}
