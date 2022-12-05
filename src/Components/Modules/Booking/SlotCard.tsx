import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import { Text, Variant } from '../../BaseComponents/Outputs/Text';
import { BasicButton } from '../../BaseComponents/Inputs/Buttons/Buttons';


export default function BasicCard() {
  let tickets = ['1 билет', '2 билета', '3 билета', '4 билета', '5 билетов'];

  return (
    <Box 
        sx={{ 
            display: "flex", 
            alignItems: "center",
            justifyContent: "space-between", 
            padding: 3,
            width: "35%", 
            minHeight: "50px",
            borderRadius: "8px",
            backgroundColor: "#343434" 
        }}
    >
        <Box sx={{ color: "white" }}>
            <Text
                {...{
                    fontWeight: 600,
                    variant: Variant.h6,
                    text: 'Начало в 18:00',
                }}
            />
            <Box sx={{ pl: 1 }}>
                <Text
                    {...{
                        fontWeight: 200,
                        variant: Variant.body2,
                        text: 'Доступно билетов: 6 шт.',
                    }}
                />
            </Box>
            <Box sx={{ pl: 2 }}>
                <Text
                    {...{
                        fontWeight: 200,
                        variant: Variant.body2,
                        text: 'Длительность: 101 мин.',
                    }}
                />
            </Box>
        </Box>
        <Box>
            <Select {...{ label: '', getSelect: ()=>{}, options: tickets }}></Select>
        </Box>
        <Box>
            <BasicButton {...{ onClick:()=>{} }}>Забронировать</BasicButton>
        </Box>
    </Box>
  );
}