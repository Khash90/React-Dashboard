import { totalCountVariants } from "@/constants"
import { Card } from "antd"

type Props = {
    resource: "companies" | "contacts" | "deals",
    isLoading: boolean,
    totalCount: number
}

const DashboardTotalCountCard = ({
    resource,
    isLoaading,
    totalCount
}: Props) => {
    const { primaryColor, secondaryColor, icon, title } = totalCountVariants[resource];


  return (
    <Card
        style={{height: "96px", padding: 0}}
        bodyStyle={{ padding: '8px 8px 8px 12px' }}
        size="small"
    >
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap'
        }}
        >
            {/*icons for each card  */}
            
        </div>

    </Card>
  )
}

export default DashboardTotalCountCard