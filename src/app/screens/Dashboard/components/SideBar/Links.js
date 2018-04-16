import React from 'react';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaUser from 'react-icons/lib/fa/user';
import FaCogs from 'react-icons/lib/fa/cogs';
import FaGroup from 'react-icons/lib/fa/group';
import FaPowerOff from 'react-icons/lib/fa/power-off';

const links = [
    {
        text: 'Analytics',
        icon: <FaBarChart />,
        links: [
            {text: 'Adopción',link: '/adopcion'},
            {text: 'Actividad',link: '/actividad'},
            {text: 'Transacción',link: '/transaccion'},
            {text: 'Beneficios (Beta)',link: '/beneficios'}
        ]
    },
    {
        text: 'Atención al cliente',
        icon: <FaUser />,
        links: [
            {text: 'Perfil de cliente',link: '/perfil'},
            {text: 'Video Chat',link: '/videochat'}
        ]
    },
    {
        text: 'Configuración',
        icon: <FaCogs />,
        links: [
            {text: 'Permisos',link: '/permisos'},
            {text: 'Chatbot',link: '/chatbot'}
        ]
    },
    {text: 'Social',link: '/social', icon: <FaGroup />},
    {text: 'Salir',link: '/logout', icon: <FaPowerOff />}
]

export default links;