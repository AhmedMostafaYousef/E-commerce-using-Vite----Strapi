import { useTheme } from "@emotion/react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import { useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";


export default function Main() {
  const [alignment, setAlignment] = useState('left');
  const theme = useTheme();
  const [value, setValue] = useState(4.5);
  const handleAlignment = (
    // @ts-ignore
    event,
    newValue
  ) => {
    setAlignment(newValue);
    setmyData(newValue);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const AllProductApi = 'products?populate=*'
  const MenApiCat = 'products?populate=*&filters[productCategory][$eq]=Men'
  const WomenApiCat = 'products?populate=*&filters[productCategory][$eq]=Women'

  const [myData, setmyData] = useState(AllProductApi)

  const { data, error, isLoading } = useGetproductByNameQuery(myData)

  if (isLoading) {
    return (
      <Typography variant="h6" color="initial">is looding .........</Typography>
    )
  }
  if (error) {
    return (
      <Typography variant="h6" color="initial"> error.message </Typography>
    )
  }
  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={3}>
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>

          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton className="myButton" value={AllProductApi} aria-label="left aligned" sx={{
              color: theme.
                // @ts-ignore
                palette.text.primary
            }}>
              All Products
            </ToggleButton>
            <ToggleButton className="myButton" value={MenApiCat} aria-label="centered" sx={{
              mx: "16px !important",
              // @ts-ignore
              color: theme.palette.text.primary,



            }}>
              Men Category
            </ToggleButton>
            <ToggleButton className="myButton" value={WomenApiCat} aria-label="right aligned" sx={{
              color: theme.
                // @ts-ignore
                palette.text.primary
            }}>
              Women category
            </ToggleButton>

          </ToggleButtonGroup>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={3}>
          {data.data.map((item) => {
            return (
              <Card key={item.attributes.productTitle} sx={{ maxWidth: 300, mt: 6, ":hover .MuiCardMedia-root": { scale: "105%", transition: "0.8s", rotate: "2deg" } }}>
                <CardMedia
                  sx={{ height: 250, }}
                  // @ts-ignore
                  image={`${item.attributes.productImg.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      {item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" flexGrow="1" >
                    <Button onClick={handleClickOpen} size="large" sx={{ textTransform: "capitalize", }}>
                      <AddShoppingCartOutlinedIcon fontSize="small" sx={{ mr: "5px" }}></AddShoppingCartOutlinedIcon>
                      Add to cart</Button>
                    <Button size="small"><Rating name="read-only" value={item.attributes.productRating} precision={0.5} readOnly /></Button>
                  </Stack>
                </CardActions>
              </Card>
            )
          })}

        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
}
