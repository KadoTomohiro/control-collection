export interface Schema {
    name: string;
    path?: string;
    project?: string;
    valueType?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'any';
}
