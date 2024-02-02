import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, Zoom, useScrollTrigger } from '@mui/material'
import React, { useCallback } from 'react'

export default function ScrollToTop() {
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    return (
        <Zoom in={useScrollTrigger()}>
            <Fab onClick={scrollToTop} size="small" variant="extended" sx={{ position: "fixed", bottom: "33px", right: "33px" }} color="primary" aria-label="add">
                <KeyboardArrowUp fontSize="medium" />

            </Fab>
        </Zoom>
    )
}
