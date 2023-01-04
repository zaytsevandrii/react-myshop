import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          {/* <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            СЕРЕБРО
          </Typography> */}
          
        </Box>

        <Box  justifyContent="center" alignItems='center' margin="auto">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            О нас
          </Typography>
          <Typography mb="30px">Вакансии</Typography>
          <Typography mb="30px">Наши Магазины</Typography>
          <Typography mb="30px">Условия и положения</Typography>
          <Typography mb="30px">Политика конфиденциальности</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
          Обслуживание клиентов
          </Typography>
          <Typography mb="30px">Справочный центр</Typography>
          <Typography mb="30px">Корпоративные и оптовые закупки</Typography>
          <Typography mb="30px">Возврат и возмещение</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: mredwardroh@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;