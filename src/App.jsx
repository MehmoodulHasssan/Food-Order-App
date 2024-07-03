import Header from "./components/Header";
import CartBody from "./components/CartBoday";
import SubmitModal from "./components/SubmitModal";
import { useState, useRef } from "react";
import { CartContext } from "./Store/CartContext";
function App() {
  const [selectedItems, setSelectedItems] = useState({
    items: []
  })

  function handleAddItem(item) {
    let isMatching = false;
    selectedItems.items.forEach(ele => {
      if (ele.id === item.id) {
        isMatching = true
      }
    });
    if (!isMatching) {
      setSelectedItems(prev => ({
        items: [...prev.items, {
          ...item,
          count: 1
        }]
      }
      ))
    }
  }

  function handleClickCart() {
    modal.current.showModal()
  }

  function onPlusItem(value) {
    setSelectedItems(prev => ({
      items: prev.items.map(item => {
        if (item.id === value.id) {
          return {
            ...item,
            count: item.count + 1
          }
        } else {
          return item;
        }
      })
    }))
  }

  function onMinusItem(value) {
    setSelectedItems(prev => ({
      items: prev.items.map((item, ind) => {
        if (item.id === value.id) {
          if (item.count === 1) {
            return prev.items.splice(ind, 1)
          }
          return {
            ...item,
            count: item.count - 1
          }
        } else {
          return item;
        }
      })
    }))
  }

  function clearItems() {
    setSelectedItems(perv => ({
      items: []
    }))
  }

  const ctxValue = {
    items: selectedItems.items,
    addItem: handleAddItem,
    onPlus: onPlusItem,
    onMinus: onMinusItem,
    onClear: clearItems
  }
  console.log(ctxValue.items)
  return (
    <CartContext.Provider value={ctxValue}>
      <Header clickCart={handleClickCart} />
      <CartBody />
      <SubmitModal />
    </CartContext.Provider >
  );
}

export default App;
