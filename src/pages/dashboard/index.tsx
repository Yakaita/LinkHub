import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { getServerAuthSession } from '../../server/common/get-server-auth-session';
import NewShortLinkForm from '../../components/NewShortLinkForm';
import { trpc } from '../../utils/trpc';
import Card from '../../components/Card';

const AdminPage: NextPage = () => {
    const { data: session } = useSession();
    const shortLinks = trpc.shortLinks.allLinks.useQuery({
        keywords: '',
    });

    return (
        <>
            <main className="p-12">
                <NewShortLinkForm />
                {shortLinks.isFetched && (
                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
                        {shortLinks.data?.map((link, index) => {
                            return (
                                <Card key={link.id}>
                                    <h4>{link?.slug}</h4>
                                    <p>{link?.url}</p>
                                </Card>
                            );
                        })}
                    </div>
                )}
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
