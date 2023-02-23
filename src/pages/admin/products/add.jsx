import AdminLayout from '@/layouts/AdminLayout'
import { Box, Card, CardBody, CardHeader, Center, Heading, Image, Text } from '@chakra-ui/react'
import { Button, Group, TextInput, Checkbox, Grid, NumberInput, FileInput, Input } from '@mantine/core';
import { hasLength, useForm, zodResolver } from '@mantine/form';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import React, { useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder';
import { IconUpload } from '@tabler/icons';
import useFileUpload from '@/Hooks/useFileUpload';
import { z } from 'zod';
import Axios from '@/Helpers/Axios';
import useAlert from '@/Hooks/useAlert';

export default function add() {

  const alert = useAlert()

  const { file, setFile, preview, image } = useFileUpload()

  const schema = z.object({
    name: z.string().min(5, { message: 'Name should have at least 5 characters' }),
    description: z.string().min(20, { message: 'Description should have at least 20 characters' }),
    price: z.number('must be a number').min(0.01, { message: 'Minimum value should be 0.01' }),
    cv: z.number('must be a number').min(0, { message: 'Minimum value should be 0' }),
    length: z.number('must be a number'),
    width: z.number('must be a number'),
    height: z.number('must be a number'),
    weight: z.number('must be a number'),
  });

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: 'This is a test product',
      price: 1.5,
      cv: 0,
      length: 0,
      width: 0,
      height: 0,
      distance_unit: 'in',
      weight: 0,
      mass_unit: 'oz',
      image: file,
    },

  });


  // const content = '';
  // const [description, setDescription] = React.useState('')


  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Enter product description' })
    ],

    onUpdate: ({ editor }) => form.setFieldValue('description', editor.getHTML()),

    content: 'This is a test product This is a test product This is a test product This is a test product This is a test product'
  });


  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (values) => {

    setSubmitting(true)
    const data = { ...values, image }

    // alert(JSON.stringify(data))
    const response = await Axios.post('/product', data)

    if (response?.data?.ok) {

      alert.success('Product added successfully', '')

      form.reset();

    }
    else {

      alert.error(response?.data?.msg)

    }



    setSubmitting(false)

  }


  return (
    <AdminLayout
      title='Add Product'
      breads={[
        {
          title: 'Add Product',
          link: '/admin/products/add',
        }
      ]}
    >
      <Card>
        <CardHeader borderBottom={'1px'} borderColor='gray.200'>
          <Heading as='h6' fontSize={'lg'}>Create new product</Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={form.onSubmit(handleSubmit)}>

            <Grid>
              <Grid.Col xs={12} sm={7} md={7} lg={8}>
                <Grid grow>

                  <Grid.Col>
                    <TextInput

                      withAsterisk
                      label="Product Name"
                      placeholder="Enter product name"
                      {...form.getInputProps('name')}
                    />
                  </Grid.Col>

                  <Grid.Col>
                    {/* <Text fontSize={'sm'}>Product Description</Text> */}

                    <Input.Wrapper
                      label="Your phone"
                      required
                      // error={form.errors?.description && form.errors?.description}
                      {...form.getInputProps('description')}
                    >
                      <RichTextEditor mih={190} editor={editor}>
                        <RichTextEditor.Toolbar sticky={false} stickyOffset={0}>
                          <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Bold />
                            {/* <RichTextEditor.Italic /> */}
                            {/* <RichTextEditor.Underline /> */}
                            {/* <RichTextEditor.Strikethrough /> */}
                            {/* <RichTextEditor.ClearFormatting /> */}
                            <RichTextEditor.Highlight />
                            {/* <RichTextEditor.Code /> */}
                          </RichTextEditor.ControlsGroup>

                          <RichTextEditor.ControlsGroup>
                            <RichTextEditor.H1 />
                            <RichTextEditor.H2 />
                            <RichTextEditor.H3 />
                            <RichTextEditor.H4 />
                          </RichTextEditor.ControlsGroup>

                          <RichTextEditor.ControlsGroup>
                            {/* <RichTextEditor.Blockquote /> */}
                            {/* <RichTextEditor.Hr /> */}
                            <RichTextEditor.BulletList />
                            <RichTextEditor.OrderedList />
                            {/* <RichTextEditor.Subscript /> */}
                            {/* <RichTextEditor.Superscript /> */}
                          </RichTextEditor.ControlsGroup>

                          <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Link />
                            <RichTextEditor.Unlink />
                          </RichTextEditor.ControlsGroup>

                          {/* <RichTextEditor.ControlsGroup>
                      <RichTextEditor.AlignLeft />
                      <RichTextEditor.AlignCenter />
                      <RichTextEditor.AlignJustify />
                      <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup> */}
                        </RichTextEditor.Toolbar>

                        <RichTextEditor.Content />
                      </RichTextEditor>
                    </Input.Wrapper>
                  </Grid.Col>

                  <Grid.Col xs={12} sm={6} md={6} lg={4}>
                    <NumberInput
                      withAsterisk
                      label="Length"
                      placeholder="Enter product length"
                      {...form.getInputProps('length')}
                    />
                  </Grid.Col>

                  <Grid.Col xs={12} sm={6} md={6} lg={4}>
                    <NumberInput
                      withAsterisk
                      label="Width"
                      placeholder="Enter product width"
                      {...form.getInputProps('width')}
                    />
                  </Grid.Col>

                  <Grid.Col xs={12} sm={6} md={6} lg={4}>
                    <NumberInput
                      withAsterisk
                      label="Height"
                      placeholder="Enter product height"
                      {...form.getInputProps('height')}
                    />
                  </Grid.Col>

                  <Grid.Col xs={12} sm={6} md={6} lg={4}>
                    <TextInput
                      withAsterisk
                      label="Distance Unit"
                      placeholder="Enter product distance unit"
                      {...form.getInputProps('distance_unit')}
                    />
                  </Grid.Col>

                  <Grid.Col xs={12} sm={6} md={6} lg={4}>
                    <NumberInput
                      withAsterisk
                      label="Weight"
                      placeholder="Enter product weight"
                      {...form.getInputProps('weight')}
                    />
                  </Grid.Col>

                  <Grid.Col xs={12} sm={6} md={6} lg={4}>
                    <TextInput
                      withAsterisk
                      label="Mass Unit"
                      placeholder="Enter mass unit"
                      {...form.getInputProps('mass_unit')}
                    />
                  </Grid.Col>

                </Grid>

              </Grid.Col>

              <Grid.Col xs={12} sm={5} md={5} lg={4}>

                <Grid>
                  <Grid.Col>
                    <NumberInput
                      withAsterisk
                      precision={2}
                      step={.5}
                      min={.01}
                      label="Product Price"
                      placeholder="Enter product price"
                      {...form.getInputProps('price')}
                    />
                  </Grid.Col>

                  <Grid.Col>
                    <NumberInput
                      withAsterisk
                      min={0}
                      label="Product CV"
                      placeholder="Enter product CV"
                      {...form.getInputProps('cv')}
                    />
                  </Grid.Col>

                  <Grid.Col>
                    <Input.Wrapper
                      {...form.getInputProps('image')}
                    >
                      <FileInput
                        label="Product Image"
                        placeholder="Select product image"
                        onChange={setFile}
                        required
                        // error={!preview ? 'Image is required' : ''}
                        icon={<IconUpload size={14} />}
                      />
                    </Input.Wrapper>
                  </Grid.Col>

                  <Grid.Col>
                    <Center>
                      {preview ?
                        <Box p={1} rounded={'md'} border='1px' borderColor='gray.200' w='full'>
                          <Center>
                            <Image maxH={'250px'} src={preview} />
                          </Center>
                        </Box>
                        : <Image rounded={'md'} src={'https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg'} />
                      }
                    </Center>
                  </Grid.Col>

                </Grid>


              </Grid.Col>

            </Grid>

            <Group position="left" mt="xl">
              <Button loading={submitting} color={'teal'} type="submit">Submit Product</Button>
            </Group>
          </form>

        </CardBody>
      </Card>
    </AdminLayout>
  )
}
