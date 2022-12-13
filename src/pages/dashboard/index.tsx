import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { getServerAuthSession } from '../../server/common/get-server-auth-session';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

interface DashboardOption {
    title: string;
    subtitle: string;
    page?: string;
}

const dashboardOptions: DashboardOption[] = [
    {
        title: 'Short Links',
        subtitle: 'All your shortened links',
        page: '/dashboard/shortlinks',
    },
    { title: 'Hubs', subtitle: 'All of your LinkHubs' },
];

const DashboardCard: React.FC = ({ options }: { options: DashboardOption }) => {
    const router = useRouter();

    return (
        <div className="flex items-center justify-between rounded-xl border-[#1D1D1D] border-2 px-8 py-6 shadow-sm">
            <div>
                <h2 className="text-2xl font-black text-white">
                    {options?.title}
                </h2>
                <p className="text-md font-semibold tracking-wide text-white">
                    {options?.subtitle}
                </p>
            </div>
            <div>
                <button
                    onClick={() => router.push(options?.page)}
                    className="rounded-full bg-sky-400 px-4 py-2 text-sky-100"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

const AdminPage: NextPage = () => {
    const { data: session } = useSession();

    return (
        <>
            <main className="container p-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {dashboardOptions.map((option, i) => {
                        return (
                            <DashboardCard key={option.page} options={option} />
                        );
                    })}
                </div>
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (
    ctx: GetServerSidePropsContext
) => {
    const session = await getServerAuthSession(ctx);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
};

export default AdminPage;
