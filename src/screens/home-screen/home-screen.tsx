import PageTemplate from '@/template/page-template'
import DashboardItem from './@components/dashboard-item'

const HomeScreen = () => {
  return (
    <PageTemplate>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mt-20">
        <DashboardItem title="Total Users" count={100} />

        <DashboardItem title="Highest Ranking" count={1900} />

        <DashboardItem title="Ranked Players" count={100} />

        <DashboardItem title="Avg Blitz Rating" count={100} />

        <DashboardItem title="Avg Rapid Rating" count={100} />

        <DashboardItem title="Avg Bullet Rating" count={100} />
      </div>
    </PageTemplate>
  )
}

export default HomeScreen
