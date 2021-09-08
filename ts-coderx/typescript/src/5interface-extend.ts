// extend interface

interface Button {
  label: string;
  onClick: () => void;
}

const button: Button = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
    
  }
}

interface IconButton extends Button {
  icon: string;
}

const addToCartBtn: IconButton = {
  label: 'add to cart',
  onClick: () => {
    console.log('click add to cart');
  },
  icon: 'cart-icon'
}
