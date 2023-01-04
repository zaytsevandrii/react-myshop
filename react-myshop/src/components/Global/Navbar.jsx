import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="90%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton /* sx={{ color: "black" }} */ style={{margin:'0px'}}>
            <MenuOutlined sx={{ stroke: "#ffffff", strokeWidth: 0.8 }} style={{width:'25px', height:'25px'}}/>
          </IconButton>
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          СЕРЕБРО
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
          marginLeft='-10px'
        >
         {/*  <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton> */}
          <IconButton /* sx={{ color: "black" }} */>
            <PersonOutline sx={{ stroke: "#ffffff", strokeWidth: 1 }} style={{width:'33px', height:'33px',fontWeight:900, margin:'-20px'}}/>
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              
            >
              <ShoppingBagOutlined sx={{ stroke: "#ffffff", strokeWidth: 0.8 }} style={{width:'30px', height:'30px',margin:'-10px'}}/>
            </IconButton>
          </Badge>
          
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;