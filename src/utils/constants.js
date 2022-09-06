import { ReactComponent as StepOne } from "../assets/buy-steps/one.svg";
import { ReactComponent as StepTwo } from "../assets/buy-steps/two.svg";
import { ReactComponent as StepThree } from "../assets/buy-steps/three.svg";
import { ReactComponent as StepFour } from "../assets/buy-steps/four.svg";
import { ReactComponent as StepFive } from "../assets/buy-steps/five.svg";

export const buySteps = [
  {
    name: "Step 1",
    image: <StepOne className="mx-auto" />,
    instructions: [
      "To purchase $FD3 tokens you will first need to create a cryptocurrency wallet.",
      "Some of the most popular wallets include Metamask and Trust Wallet.",
    ],
  },
  {
    name: "Step 2",
    image: <StepTwo className="mx-auto" />,
    instructions: [
      "You should now load up your wallet with the cryptocurrency you wish to purchase $FD3 with. We recommend either ETH or BNB.",
    ],
  },
  {
    name: "Step 3",
    image: <StepThree className="mx-auto" />,
    instructions: [
      "Once your wallet is loaded, simply click the connect wallet button at the top of the website and select the wallet you have chosen,You will be taken to another pop-up.",
    ],
  },
  {
    name: "Step 4",
    image: <StepFour className="mx-auto" />,
    instructions: [
      "Double check everything looks correct and then click the buy button. After a few seconds, your transaction should go through.",
    ],
  },
  {
    name: "Step 5",
    image: <StepFive className="mx-auto" />,
    instructions: [
      "You have now purchased $FD3! Once the presale has ended you will be able to find your tokens by clicking the ‘Receive’ button on the main website. They are now yours to do with how you will.",
    ],
  },
];
