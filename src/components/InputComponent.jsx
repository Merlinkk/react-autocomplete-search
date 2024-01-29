import React,{useEffect, useState, useRef} from 'react'

function InputComponent({Data}) {

    const [state, setState] = useState('')
    const [dropDownVisibility, setDropDownVisibility] = useState(true)
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setState(e.target.value)
        setDropDownVisibility(true)
    }

    var filtered = Data.filter((elem)=>{
        return elem.name.toLowerCase().includes(state.toLocaleLowerCase())
    })

    const setInput = (value) => {
        setState(value)
    }


    const handleEscapeKey = (e) => {
        if (e.key === 'Escape' && inputRef.current !== document.activeElement) {
          setDropDownVisibility(false);
          console.log('Escape');
        }
      };
    
      useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
    
        return () => {
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, []);

  return (
    <>
    <div className='inputDiv'>
        <div><input className='inputBox' onChange={handleChange} type="text" value={state} />
        <button>Search</button>
        </div>
        <div className='autoCorrect'>
        {state === '' ? null : 
        dropDownVisibility ? 
        <ul style={{listStyle: 'none',}}>
        {filtered.map((elem)=>{
            return<li onClick={() => setInput(elem.name)} key={elem.name}>
            {elem.name}
          </li>
        })}
        </ul> : null
        }
    </div>
    </div>
    
    </>
  )
}

export default InputComponent