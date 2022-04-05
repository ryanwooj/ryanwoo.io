import ChatContainer from "../../components/ChatContainer";
import Container from "../../components/Container";
import { prisma } from "../../lib/prisma";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Audio } from "react-loader-spinner";

export type FallBackDataType = {
  fallbackData: [FallBackData];
  user: any;
};

export type FallBackData = {
  id: string;
  content: string;
  date: string;
  time: string;
  userId: number;
};

const Chat: React.FC<FallBackDataType> = ({ fallbackData, user }) => {
  const { data: session, status } = useSession();
  console.log(user);
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl w-full border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-16">
        <div className="flex flex-col w-full">
          <h3 className="text-xl font-semibold leading-3">Ananymous Chat</h3>
          <br />
          <h4 className="text-lg leading-3">
            Talk Free! It's fully ananymous.
          </h4>
        </div>

        {status === "loading" ? (
          <div className="flex flex-row w-full py-36 justify-center items-center">
            <Audio height="100" width="100" color="grey" ariaLabel="loading" />
          </div>
        ) : (
          <>
            <div className="w-full flex flex-row justify-end align-center">
              {session ? (
                <button
                  className="min-w-10 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 text-white dark:text-black text-center my-2 py-2 px-10 rounded"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              ) : (
                <button
                  className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 text-white dark:text-black text-center my-2 py-2 px-4 rounded"
                  onClick={() => signIn()}
                >
                  Sign in
                </button>
              )}
            </div>
            <ChatContainer fallbackData={fallbackData} user={user} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Chat;

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  const messages = await prisma.message.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });

  const fallbackData = messages.map((item) => ({
    id: item.id.toString(),
    content: item.content,
    date: item.createdAt.toLocaleDateString(),
    time: item.createdAt.toLocaleTimeString(),
    userId: item.userId,
  }));
  if (session?.user) {
    const user = await prisma.user.findUnique({
      where: {
        email: session!.user!.email!,
      },
    });

    return {
      props: {
        fallbackData,
        user,
      },
    };
  } else {
    return {
      props: {
        fallbackData,
      },
    };
  }
};
