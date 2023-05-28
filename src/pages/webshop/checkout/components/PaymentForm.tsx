import { observer } from "mobx-react-lite"
import { Grid, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { PaymentOptions } from "./PaymentOptions";
import { PaymentCreditCardForm } from "./PaymentCreditCardForm";
import { Container} from '@mui/material';
import MobXContext from "@stores/MobXContext";


export const PaymentForm = observer(() => {

  const [selectedPaymentOption, setSelectedPaymentOption] = useState<number>(-1);
  const { basketStore, languageStore } = useContext(MobXContext);

  const selectPaymentExecutor = () => {
    if (selectedPaymentOption !== -1) {
      switch (selectedPaymentOption) {
        case 0:
          return <PhoneInput onInputChanged={handleMobilePayClicked} />
        case 1:
          return <PaymentCreditCardForm />
        case 2:
          return <PhoneInput onInputChanged={handlePayPalClicked} />
        default:
          console.log("Unknown payment option");
          break;
      }
    }
  }

  const handleMobilePayClicked = (event: React.ChangeEvent<HTMLInputElement>) => { basketStore.OrderDTO.payment.method = "MobilePay"; };
  const handlePayPalClicked = (event: React.ChangeEvent<HTMLInputElement>) => { basketStore.OrderDTO.payment.method = "PayPal"; };

  return (
    <Grid container sx={{
      display: 'flex',
      flexDirection: 'column'
    }}
    >
      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
        <PaymentOptions setSelectedPaymentOption={setSelectedPaymentOption} />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        {selectPaymentExecutor()}
      </Grid>
    </Grid>
  )
});

const PhoneInput: React.FC<{ onInputChanged: (evt: any) => void }> = observer((props: { onInputChanged: (evt: any) => void }) => {
  const { languageStore } = useContext(MobXContext);

  return (
    <Container sx={{ marginTop: '1rem' }}>
      <TextField
        variant="outlined"
        label={languageStore.currentLanguage.phone_text}
        onChange={props.onInputChanged}
        defaultValue="+45 12345678"
        sx={{
          width: '100%'
        }}
      />
    </Container>
  )
});