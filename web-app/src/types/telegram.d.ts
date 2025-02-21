interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
        user?: {
            id: number;
            first_name?: string;
            last_name?: string;
            username?: string;
            // More parameters?
        };
    };
    ready(): void;
    sendData(data: string): void;
    close(): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp
    }
}