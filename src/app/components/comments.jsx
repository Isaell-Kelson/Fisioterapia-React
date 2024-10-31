import React from 'react';

export default function Comments() {
    const positiveComments = [
        {
            id: 1,
            text: "Estou extremamente satisfeito com o serviço oferecido. Profissionais competentes e atenciosos!",
            author: "João Silva"
        },
        {
            id: 2,
            text: "Ótima experiência! Serviço de alta qualidade e entrega no prazo.",
            author: "Maria Santos"
        },
        {
            id: 3,
            text: "Recomendo a todos! Serviço excepcional e equipe muito prestativa.",
            author: "Carlos Oliveira"
        },
        {
            id: 4,
            text: "Serviço de primeira! Superou minhas expectativas.",
            author: "Ana Paula"
        },
        {
            id: 5,
            text: "Experiência incrível! Volto com certeza.",
            author: "Pedro Henrique"
        },
        {
            id: 6,
            text: "Atendimento nota 10! Estou muito satisfeito.",
            author: "Roberta Almeida"
        }
    ];

    return (
        <section className='bg-teal-300 mt-36 py-10'>
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center">
                <h2 className="text-center w-full mb-4 text-white font-extrabold font-mono text-4xl mt-16">Testemunhos
                    Inspiradores</h2>
                <p className="text-center w-full text-white font-mono text-lg">A satisfação é nosso maior pagamento</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                    {positiveComments.map(comment => (
                        <div key={comment.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                            <p className="text-lg mb-2">{comment.text}</p>
                            <p className="text-sm text-gray-600">- {comment.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
