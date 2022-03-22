import { useContext } from 'react'
import { AppState } from '../../state/appContext'
import './sidebar.css'

interface sideBarProps {
    onChange : (item: string) => void
}

const SideBar =  (props: sideBarProps) => {
   const val: any  = useContext(AppState)
   console.log("value:", val)
    // const sideBarItems = ['Main Course', 'Snacks', 'Special Meals', 'Desserts', 'Beverages' ]
    return(
        <div className='side-bar'>
            <div>
                {Object.keys((val?.extras?.categories) || []).map((item: any, i: number) => (
                <div key={i} className='side-bar-item' onClick={() => props.onChange(item)}>
                    <div>
                        <img src={val.extras.categories[item].icon} alt="j" />
                    </div>
                    {item}
                 </div>
                )
            )}

            </div>
        </div>

    )
}

export  default SideBar;