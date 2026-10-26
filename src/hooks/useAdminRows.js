import {
  useEffect,
  useState
} from 'react';

import {
  loadModuleRows,
  subscribeModuleRows
} from '../services/store.js';

export default function useAdminRows(
  moduleName,
  seeds=[]
){

  const [rows,setRows]=
    useState(seeds);

  useEffect(()=>{

    let alive=true;

    loadModuleRows(
      moduleName,
      seeds
    ).then(data=>{

      if(alive){
        setRows(
          Array.isArray(data)
            ?data
            :seeds
        );
      }

    });

    const unsubscribe=
      subscribeModuleRows(
        moduleName,
        seeds,
        data=>{

          if(alive){
            setRows(
              Array.isArray(data)
                ?data
                :seeds
            );
          }

        }
      );

    return ()=>{

      alive=false;
      unsubscribe?.();

    };

  },[moduleName]);

  return rows;
}
