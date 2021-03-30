import Select from "react-select";
import { useDispatch } from "react-redux";
import React,{ useState } from "react";
import { fetchGetCharacters } from "../../redux/ActionCreators";
import styles from './Filter.module.scss'

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("gender");

  const genderOptions = ['female', 'male', 'genderless', 'unknown']
  const statusOptions = ['alive', 'dead', 'unknown']

  const changeOptionHandler = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption !== null) {
      setFilter(selectedOption.value);
    }
  };

  const filterHandler = (filterOption:string) => {
  if(filter==='status'){
    dispatch(fetchGetCharacters({status:filterOption}))
  }else if(filter==='gender'){
    dispatch(fetchGetCharacters({gender:filterOption}))
  }
  }

  return (
    <div className={styles.container}>
      <div>
      <Select
        options={[
          { value: "gender", label: "gender" },
          { value: "status", label: "status" },
        ]}
        onChange={changeOptionHandler}
        defaultValue={{value:'gender', label:'gender'}}
      />
       </div>
      
      {filter === "gender" && (
        <ul className={styles.filterList}>
          {genderOptions.map( 
          (opt, i) => (<li onClick={ ()=> filterHandler(opt) } key={i} >{opt}</li>) 
        )}
        </ul>
      )}
      {filter === "status" && (
        <ul className={styles.filterList}>
         {statusOptions.map( 
          (opt, i) => (<li onClick={ ()=> filterHandler(opt) } key={i} >{opt}</li>) 
        )}
        </ul>
      )}
    </div>
  );
};

export default Filter;
