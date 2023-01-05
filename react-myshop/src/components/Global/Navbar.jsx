import { useDispatch, useSelector } from "react-redux"
import { Badge, Box, IconButton, useMediaQuery } from "@mui/material"
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { shades } from "../../theme"
import { setIsCartOpen } from "../../state"
import { useState } from "react"

function Navbar() {
    const navigate = useNavigate()
    const [open,setOpen] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const isNonMobile = useMediaQuery("(min-width:840px)");
    return (
        <Box style={{height:isNonMobile?'100px':'60px'}}
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            backgroundColor="rgba(255, 255, 255, 0.95)"
            color="black"
            position="fixed"
            top="0"
            left="0"
            zIndex="1"
        >
            <Box width="90%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
                <div className="menu">
                    <IconButton /* sx={{ color: "black" }} */ style={{ margin: "0px" }} onClick={()=>setOpen(!open)}>
                        <MenuOutlined sx={{ stroke: "#ffffff", strokeWidth: 0.8 }} style={{ width: "25px", height: "25px" }} />
                    </IconButton>
                </div>
                <div className="menuShow">
                    <a href="tel:+74942398000" class="header__contact header__contact__phone">
                        {" "}
                        +7 (4942) 398-000
                    </a>
                    <br />

                    <a href="mailto:alikor@alikorcom" class="header__contactjs_enter_link">
                        alikor@alikr.com
                    </a>
                </div>
                <Box onClick={() => navigate("/")} sx={{ "&:hover": { cursor: "pointer" } }} color={shades.secondary[500]}>
                    СЕРЕБРО
                </Box>
                <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2" marginLeft="-10px">
                    {/*  <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton> */}
                    <IconButton /* sx={{ color: "black" }} */>
                        <PersonOutline
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                            style={{ width: "33px", height: "33px", fontWeight: 900, margin: "-20px" }}
                        />
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
                        <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                            <ShoppingBagOutlined
                                sx={{ stroke: "#ffffff", strokeWidth: 0.8 }}
                                style={{ width: "30px", height: "30px", margin: "-10px" }}
                            />
                        </IconButton>
                    </Badge>
                </Box>
            </Box>
          { isNonMobile&& <div className="descNavbar">
                <ul>
                    <Link><li>О компании</li></Link>
                    <Link><li>Кольца</li></Link>
                    <Link><li>Серьги</li></Link>
                    <Link><li>Ожерелья</li></Link>
                    <Link><li>Где купить</li></Link>
                    <Link><li>Стать партнером</li></Link>
                </ul>
            </div>}
            <div id="mobile-menu" className={`mobile-main-menu ${open && "show-menu"}`}>
                <ul>
                    <li><Link>О компании</Link></li>
                   <li><Link>Кольца</Link></li>
                   <li><Link>Серьги</Link></li>
                    <li><Link>Ожерелья</Link></li>
                  <li><Link>Где купить</Link></li>
                  <li><Link>Стать партнером</Link></li>
                </ul>
            </div>
        </Box>
    )
}

export default Navbar
