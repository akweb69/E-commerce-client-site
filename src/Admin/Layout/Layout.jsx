import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    Home,
    BarChart3,
    Users,
    Folder,
    Settings,
    LogOut,
    User,
    TrendingUp,
    DollarSign,
    Menu,
    X,
} from 'lucide-react';

/* ---------- useLocalStorage Hook (Pure JS) ---------- */
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

/* ---------- Menu Config ---------- */
const menu = [
    { icon: Home, label: 'Dashboard', to: '/' },
    { icon: BarChart3, label: 'Analytics', to: '/analytics' },
    { icon: Users, label: 'Users', to: '/users' },
    { icon: Folder, label: 'Projects', to: '/projects' },
    { icon: Settings, label: 'Settings', to: '/settings' },
    { icon: LogOut, label: 'Logout', to: '/logout', separate: true },
];

/* ---------- Reusable StatCard ---------- */
const StatCard = React.memo(({ icon: Icon, title, value, growth, progress }) => (
    <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-l-8 border-orange-500 hover:shadow-orange-500/25 transition-all duration-500"
    >
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-orange-800 group-hover:text-orange-900">{title}</h3>
            <div className="p-3 bg-orange-500/20 rounded-2xl group-hover:bg-orange-500/30">
                <Icon className="w-7 h-7 text-orange-600" />
            </div>
        </div>

        <div className="text-5xl font-black text-orange-600 mb-2">{value}</div>

        {growth && (
            <p className="text-green-600 font-bold text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                {growth}
            </p>
        )}

        {progress && (
            <div className="w-full bg-orange-200 rounded-full h-3 overflow-hidden mt-4">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: progress + '%' }}
                    transition={{ duration: 1.2, ease: 'circOut' }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full"
                />
            </div>
        )}
    </motion.div>
));

/* ---------- Sidebar ---------- */
const Sidebar = ({ open, setOpen }) => {
    const { pathname } = useLocation();

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Mobile Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    />

                    {/* Sidebar Drawer */}
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="w-72 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 text-white fixed md:relative z-40 h-full shadow-2xl"
                    >
                        <div className="p-8 sticky top-0 bg-orange-700/50 backdrop-blur">
                            <h2 className="text-3xl font-black text-center tracking-wider bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                                DASHBOARD
                            </h2>
                        </div>

                        <nav className="mt-10 px-6 space-y-2">
                            {menu.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.to;

                                return (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        end
                                        onClick={() => item.separate && setOpen(false)}
                                        className={`flex items-center gap-4 p-5 rounded-2xl font-semibold transition-all ${isActive
                                            ? 'bg-white/25 shadow-xl border-2 border-white/30 backdrop-blur-sm'
                                            : 'hover:bg-white/15'
                                            }`}
                                    >
                                        <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                            <Icon className="w-5 h-5" />
                                        </motion.div>
                                        <span className="text-lg">{item.label}</span>
                                    </NavLink>
                                );
                            })}
                        </nav>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

/* ---------- TopBar ---------- */
const TopBar = ({ onMenuClick, isOpen }) => (
    <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl border-b-4 border-orange-500 px-6 py-5 flex justify-between items-center sticky top-0 z-20"
    >
        <h1 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
            Admin Dashboard
        </h1>

        <div className="flex items-center gap-4">
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onMenuClick}
                className="md:hidden p-3 rounded-xl bg-orange-500 text-white shadow-lg"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            <div className="hidden md:flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold shadow-xl border border-orange-400">
                <User className="w-5 h-5" />
                <span>Admin User</span>
            </div>
        </div>
    </motion.header>
);

/* ---------- Home Dashboard Content ---------- */
const HomeDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatCard icon={Users} title="Total Users" value="12,480" growth="+12% from last month" />
        <StatCard icon={DollarSign} title="Revenue" value="$48,574" progress={85} />
        <StatCard icon={BarChart3} title="Active Projects" value="89" growth="+8% this week" />

        <div className="md:col-span-2 lg:col-span-1">
            <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-l-8 border-orange-500"
            >
                <h3 className="text-2xl font-black text-orange-800 mb-6">Quick Actions</h3>
                <div className="space-y-3">
                    {[
                        { label: 'View Reports', icon: BarChart3, to: '/analytics' },
                        { label: 'Manage Users', icon: Users, to: '/users' },
                        { label: 'Settings', icon: Settings, to: '/settings' },
                    ].map((action) => (
                        <NavLink
                            key={action.to}
                            to={action.to}
                            className="flex items-center gap-4 p-4 bg-orange-50/70 rounded-2xl hover:bg-orange-100 transition-all font-medium"
                        >
                            <action.icon className="w-6 h-6 text-orange-600" />
                            <span className="text-lg">{action.label}</span>
                        </NavLink>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
);

/* ---------- Main Layout ---------- */
const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebarOpen', true);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle Logout
    useEffect(() => {
        if (location.pathname === '/logout') {
            if (window.confirm('Are you sure you want to logout?')) {
                // Your logout logic here (clear token, etc.)
                navigate('/');
            } else {
                navigate(-1);
            }
        }
    }, [location.pathname, navigate]);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 font-sans">
            {/* Sidebar */}
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} isOpen={sidebarOpen} />

                <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        {location.pathname === '/' && <HomeDashboard />}
                        <Outlet />
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default Layout;