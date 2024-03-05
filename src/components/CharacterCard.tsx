import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const CharacterCard = ({ character }) => {
    return (
        <Link to={`/character/${character.id}`}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="168"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent sx={{ padding: '12px 16px' }}>
                        <Typography gutterBottom component="div" sx={{ fontSize: '20px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            {character.name}
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ fontSize: '14px' }}>
                            {character.status}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default CharacterCard