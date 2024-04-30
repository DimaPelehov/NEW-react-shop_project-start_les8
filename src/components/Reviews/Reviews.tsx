import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'It`s FIRST review .ipsum dolor sit amet consectetur, adipisicing elit. Deserunt esse ipsum dolorum cumque sint quos iusto rerum laborum sequi commodi quidem nostrum voluptates expedita velit ad autem, omnis facilis illum.',
        },
        {
            name: 'Bob',
            text: 'It`s SECOND review .ipsum dolor sit amet consectetur, adipisicing elit. Deserunt esse ipsum dolorum cumque sint quos iusto rerum laborum sequi commodi quidem nostrum voluptates expedita velit ad autem, omnis facilis illum.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    // додавання відгуків
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fildes are required')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <Typography variant="h4" component={'h2'} sx={{ margin: '40px 0' }}>
                Reviews
            </Typography>
            <div>
                {reviews.map(({ name, text }, i) => (
                    <Card key={i} variant="outlined" sx={{ margin: '20px 0' }}>
                        <CardContent>
                            <div>{name}:</div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        label="Your name"
                        size="small"
                        onChange={handleChangeName}
                        value={newReview.name}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        onChange={handleChangeText}
                        value={newReview.text}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
