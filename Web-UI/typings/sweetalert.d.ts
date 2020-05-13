export interface SweetAlert {
    (...params: any): Promise<boolean>;
}

declare global {
    const swal: SweetAlert;
}

declare const swal: SweetAlert;
export default swal;