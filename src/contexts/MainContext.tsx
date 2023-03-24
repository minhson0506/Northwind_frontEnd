import React, {useContext} from 'react'
import {OrderWithDetails} from '../interface/Order';

export type ContextType = {
    orders: OrderWithDetails[];
    setOrders: React.Dispatch<React.SetStateAction<OrderWithDetails[]>>;
    // setOrders: (order: OrderWithDetails[]) => void;
    update: boolean;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainContext = React.createContext<ContextType>(
    {
        orders: [],
        setOrders: () => {return 1},
        update: false,
        setUpdate: () => {},
    }
);

export const useMainContext = () => useContext(MainContext);


// const MainContext = React.createContext<ContextType | null>(null);

// const MainProvider = (props: AppContextInterface) => {
//     const [orders, setOrders] = useState<OrderWithDetails[]>([]);
//     const [update, setUpdate] = useState(false);
  
//     return (
//         <MainContext.Provider
//             value={{
//             orders,
//             setOrders,
//             update,
//             setUpdate,
//         }}
//         >
//             {props.children}
//         </MainContext.Provider>
//     );
//     };
    
//     MainProvider.propTypes = {
//         children: PropTypes.node,
//     };
  
// export {MainContext, MainProvider};

// export interface AppContextInterface extends PropTypes.InferProps<typeof MainProvider.propTypes> {
//     orders: OrderWithDetails[];
//     setOrders: React.Dispatch<React.SetStateAction<OrderWithDetails[]>>;
//     update: boolean;
//     setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export interface ContextType {
//     orders: OrderWithDetails[];
//     setOrders: React.Dispatch<React.SetStateAction<OrderWithDetails[]>>;
//     update: boolean;
//     setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const MainProvider: React.FC<Props> = ({children}) => {
//     const [orders, setOrders] = useState<OrderWithDetails[]>([]);
//     const [update, setUpdate] = useState(false);

//     return (
//         <MainContext.Provider value={{orders, setOrders, update, setUpdate}}>
//             {children}
//         </MainContext.Provider>
//     );
// };

// type Props = {
//     children: React.ReactNode
//  }

// export {MainContext, MainProvider};